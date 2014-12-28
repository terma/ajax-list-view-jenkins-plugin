package com.terma.jenkins.plugins.ajaxjobsview;

import hudson.Extension;
import hudson.model.ListView;
import hudson.model.ViewDescriptor;
import hudson.model.ViewGroup;
import org.kohsuke.stapler.DataBoundConstructor;

public class AjaxJobsView extends ListView {

    @DataBoundConstructor
    public AjaxJobsView(String name) {
        super(name);
    }

    public AjaxJobsView(String name, ViewGroup owner) {
        super(name, owner);
    }

    @Extension
    public static final class DescriptorImpl extends ViewDescriptor {

        @Override
        public String getDisplayName() {
            return Messages.DynamicView_DisplayName();
        }
    }

}
