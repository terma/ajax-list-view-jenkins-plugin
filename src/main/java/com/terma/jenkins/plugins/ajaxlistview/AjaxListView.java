package com.terma.jenkins.plugins.ajaxlistview;

import hudson.Extension;
import hudson.model.ListView;
import hudson.model.ViewDescriptor;
import hudson.model.ViewGroup;
import org.kohsuke.stapler.DataBoundConstructor;

public class AjaxListView extends ListView {

    @DataBoundConstructor
    public AjaxListView(String name) {
        super(name);
    }

    public AjaxListView(String name, ViewGroup owner) {
        super(name, owner);
    }

    @Extension
    public static final class DescriptorImpl extends ViewDescriptor {

        @Override
        public String getDisplayName() {
            return Messages.AjaxListView_DisplayName();
        }
    }

}
