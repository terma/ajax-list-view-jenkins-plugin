package com.terma.dynamicviewplugin;

import hudson.Extension;
import hudson.model.ListView;
import hudson.model.ViewDescriptor;
import hudson.model.ViewGroup;
import org.kohsuke.stapler.DataBoundConstructor;

public class DynamicView extends ListView {

    @DataBoundConstructor
    public DynamicView(String name) {
        super(name);
    }

    public DynamicView(String name, ViewGroup owner) {
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
